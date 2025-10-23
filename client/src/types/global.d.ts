// Static mode - no mongoose dependency
declare global {
  // we augment NodeJS.Global
  var mongoose: {
    conn: unknown | null;
    promise: Promise<unknown> | null;
  } | undefined;
}
