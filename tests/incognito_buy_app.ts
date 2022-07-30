import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { IncognitoBuyApp } from "../target/types/incognito_buy_app";

describe("incognito_buy_app", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.IncognitoBuyApp as Program<IncognitoBuyApp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
