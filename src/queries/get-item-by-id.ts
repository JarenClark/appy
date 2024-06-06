export function getItemById(client: any, itemId: string) {
  return client
    .from('items')
    .select(`*`)
    .eq('id', itemId)
    .throwOnError()
    .single()
}
