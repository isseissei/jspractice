import axios from 'axios';
import cheerio  from 'cheerio';
exports.handler = async (event, context) => {
    try {
        // ウェブサイトのURL
        const url = 'https://japan-o-entry.com/event/view/200';

        // サイトからHTMLを取得
        const response = await axios.get(url);
        const html = response.data;

        // Cheerioを使用してHTMLを解析
        const $ = cheerio.load(html);

        // 対象の要素を検索
        let count = null;
        $('p').each((index, element) => {
            const text = $(element).text();
            const match = text.match(/(\d+)\s*人が申込済です/);
            if (match) {
                count = parseInt(match[1]);
                console.log("参加人数: "+count)
                return false; // ループを終了
            }
        });

        // レスポンスを返す
        if (count !== null) {
            return {
                statusCode: 200,
                body: JSON.stringify({ count }),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: '指定された要素が見つかりませんでした。' }),
            };
        }
    } catch (error) {
        // エラーが発生した場合はエラーレスポンスを返す
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
