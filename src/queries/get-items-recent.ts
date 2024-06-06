export function getItemsRecent(client: any, space_id: string) {
  return client
    .from('items')
    .select(`*`)
    .eq('space_id', space_id)
    .order('updated_at', { ascending: false })
    .range(0, 3)
    .throwOnError()
}
