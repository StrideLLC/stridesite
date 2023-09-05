import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library/";

export const ConnectSheet = async (sheetid) => {
  const auth = new JWT(
    process.env.CLIENT_EMAIl,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  try {
    const doc = new GoogleSpreadsheet(sheetid, auth);
    await doc.loadInfo();
    if(!doc) doc.status = 404;
    return doc;
  } catch (err) {
    if(err.message.includes('404') || err.message.includes('401')) {
        return {error: 'Invalid Sheet ID'}
    }
  }

  };


