export function getNewPostId(list: PostsType, id: number): number {
  const current = list.findLast((item) => item.userId === id);
  const newId = current ? +current.id + 1 : 1;
  return newId;
}
