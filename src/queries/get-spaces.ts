export function getSpaces(client: any) {
  return client.from('spaces').select(`*`).throwOnError()
}
