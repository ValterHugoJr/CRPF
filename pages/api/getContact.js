import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../lib/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    const contacts = rows
    .filter((i) => i.Ativo.toLowerCase() === "true")
    .map((i) => (
    {
        nome: i.Nome,
        datanascimento: i.DataNascimento,
        email: i.Email,
        isWhats: i.WhatsApp === "TRUE" ? true : false,
        telefone: i.Telefone ,
        categoria: i.Categoria        
    }
    ))
    res.json(contacts)
  }catch(error){
    console.log(error)
    res.json({})
  }
}
