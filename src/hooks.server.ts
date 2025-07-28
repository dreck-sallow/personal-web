export async function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk({ html }) {
      return html.replace("%lang%", event.locals.locale)
    },
  })
}
