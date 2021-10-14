let isSubApp = false;
export function modifyClientRenderOpts(memo: { rootElement: any }) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}
