async function uploadFile() {
    const token = document.getElementById('token').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    const statusElement = document.getElementById('status');

    

    const url = `https://graph.microsoft.com/v1.0/me/drive/root:/` + file.name + `:/content`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': file.type
            },
            body: file
        });

        if (response.ok) {
            alert("アップロード成功")
        } else {
            console.log("ここ")
            const errorData = await response.json();
            console.log(errorData)
            alert("アップロード失敗")
        }
    } catch (error) {
        statusElement.textContent = "エラー: " + error.message;
    }
}
