const path = require('path')
const fs = require('fs')

const src = path.join(__dirname, 'src')
const dist = path.join(__dirname, 'dist')

const components = fs.readdirSync(src).filter(
  (filename) => filename.match(/^(?!index).+\.js$/)
)

// abrir tokens e mapear em { chave: valor }
components.forEach((component) => {
  // abrir o arquivo
  // foreach token
  //   replace 'chave' por 'valor'
  // salvar novo arquivo em dist
})
