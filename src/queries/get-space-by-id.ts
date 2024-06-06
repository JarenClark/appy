export function getSpaceById(client: any, spaceId: string) {
  return client
    .from('spaces')
    .select(`*`)
    .eq('id', spaceId)
    .throwOnError()
    .single()
}
