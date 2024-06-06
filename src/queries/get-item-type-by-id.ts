export function getItemTypeById(client: any, typeId: string) {
  return client
    .from('item_types')
    .select(`*`)
    .eq('id', typeId)
    .throwOnError()
    .single()
}
