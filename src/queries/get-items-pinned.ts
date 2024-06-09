export function getItemsPinned(client: any, space_id: string) {
  return client
    .from('items')
    .select(`*`)
    .eq('space_id', space_id)
    .eq('pinned', true)
    .order('updated_at', { ascending: false })
    .throwOnError()
}
