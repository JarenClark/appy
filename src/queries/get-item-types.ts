export function getItemTypes(client: any, space_id: string) {
  return client
    .from('item_types')
    .select(`*`)
    .eq('space_id', space_id)
    .throwOnError()
}
