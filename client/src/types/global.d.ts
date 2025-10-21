// Static mode - no mongoose dependency
declare global {
  // we augment NodeJS.Global
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: any | null;
    promise: Promise<any> | null;
  } | undefined;
}
