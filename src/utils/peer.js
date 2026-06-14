// Esquema de URL do cliente desktop. O RustDesk registra "<app_name>://" (app_name em
// minúsculas). Nosso cliente branded usa APP_NAME="SuporteHiperfarma" -> "suportehiperfarma://".
// Se mudar o nome do app no build do cliente, ajuste aqui.
const CLIENT_URI_SCHEME = 'suportehiperfarma'

export const connectByClient = (id) => {
  // abre o protocolo <scheme>://<id> -> dispara o cliente desktop instalado e conecta
  let a = document.createElement('a')
  a.href = `${CLIENT_URI_SCHEME}://${id}`
  a.target = '_self'
  a.click()
}
