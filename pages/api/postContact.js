import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../lib/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  const data = JSON.parse(req.body)

  await sheet.addRow({
    Ativo: false,
    Nome: data.Nome,
    Telefone: data.Telefone,
    Whatsapp: true,
    Categoria: data.Categoria,
    Atuacao: data.Atuacao,
    Instagram: data.Instagram,
  })

  res.json({ status: true })
}
