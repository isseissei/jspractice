import BoxSDK from 'box-node-sdk';
import fs from 'fs';
import path from 'path';

// Box SDKの初期化
const sdk = new BoxSDK({
  clientID: 'j3luw1i8p5hevviv6rfo7xssujrrvaol',            // BoxアプリのクライアントID
  clientSecret: 'chNMAecYun3357NqeWbjvvcMpy5GVIXf',    // Boxアプリのクライアントシークレット
});

// 開発者トークンで認証
const client = sdk.getBasicClient('tURGtAwJTRiKr9Z7puH8y0N5rb5sJFlA');

// アップロードするファイルのパスとフォルダID
const filePath = path.resolve('./index.md'); // ファイルの絶対パス
const folderId = '0';           // フォルダID ('0'はルートフォルダ)

// ファイルのストリームを作成
const fileStream = fs.createReadStream(filePath);

// Boxにファイルをアップロード
client.files.uploadFile(folderId, 'test.json', fileStream)
  .then(response => {
    console.log('File uploaded successfully:', response);
  })
  .catch(error => {
    console.error('Error uploading file:', error);
  });
