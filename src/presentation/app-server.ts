type Options = {
  base: number;
  limit: number;
  showTable: boolean;
};

export class AppServer {
  static run(options: Options) {
    console.log("Server running...");
    console.log({ options });
  }
}
