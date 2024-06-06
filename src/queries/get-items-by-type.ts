export function getItemsByType(client: any, item_type: string) {
  return client
    .from('items')
    .select(`*`)
    .eq('item_type_id', item_type)
    .throwOnError()
}
