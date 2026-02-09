"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.08),_transparent_55%)]" />

      <main className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-4 sm:px-10 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_30px_rgba(129,140,248,0.8)]">
              <div className="absolute inset-1 rounded-2xl bg-slate-950/80" />
              <div className="absolute inset-[6px] rounded-2xl bg-gradient-to-br from-sky-500/70 via-indigo-500/70 to-fuchsia-500/70 blur-[6px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-300/80">
                Base Network
              </span>
              <span className="cosmic-gradient-text text-lg font-semibold leading-tight">
                Cosmos Swap
              </span>
            </div>
          </div>

          <div className="cosmic-orbit flex items-center gap-3">
            <span className="hidden text-xs font-medium uppercase tracking-[0.32em] text-slate-400/80 sm:inline">
              Connect Wallet
            </span>
            <ConnectButton
              showBalance={false}
              chainStatus="icon"
              accountStatus="address"
            />
          </div>
        </header>

        <section className="flex flex-1 items-center justify-center px-4 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-4">
          <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
            <div className="glass-panel relative p-5 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Swap
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                      Swap tokens in the Base cosmos
                    </h1>
                  </div>
                  <div className="flex flex-col items-end text-right text-[11px] text-slate-400">
                    <span>Network: Base Mainnet</span>
                    <span className="mt-0.5 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-sky-300">
                      Alpha UI — swap logic coming next
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 rounded-2xl bg-slate-900/80 p-4 shadow-inner shadow-slate-900/80">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>From</span>
                    <span>Balance: 0.00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-50 ring-1 ring-slate-700/80 transition hover:bg-slate-700/80 hover:ring-slate-500/80">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/90 text-[11px] font-semibold text-slate-950">
                        Ξ
                      </span>
                      <span>ETH</span>
                      <span className="text-[11px] text-slate-400">on Base</span>
                    </button>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="flex-1 bg-transparent text-right text-2xl font-semibold text-slate-50 outline-none placeholder:text-slate-500"
                    />
                  </div>
                  <p className="text-right text-[11px] text-slate-500">
                    ≈ $0.00
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/90 shadow-lg shadow-slate-950/60 ring-1 ring-slate-700/80">
                    <span className="text-slate-300">↓</span>
                  </div>
                </div>

                <div className="grid gap-3 rounded-2xl bg-slate-900/80 p-4 shadow-inner shadow-slate-900/80">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>To</span>
                    <span>Balance: 0.00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-50 ring-1 ring-slate-700/80 transition hover:bg-slate-700/80 hover:ring-slate-500/80">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/90 text-[11px] font-semibold text-slate-950">
                        ◎
                      </span>
                      <span>USDC</span>
                      <span className="text-[11px] text-slate-400">Base</span>
                    </button>
                    <div className="flex-1 text-right">
                      <p className="text-2xl font-semibold text-slate-400">
                        0.0
                      </p>
                    </div>
                  </div>
                  <p className="text-right text-[11px] text-slate-500">
                    Route: best available on Base
                  </p>
                </div>

                <button
                  disabled
                  className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.45)] transition disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Connect wallet to swap
                </button>

                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Est. gas: —</span>
                  <span className="flex items-center gap-1">
                    Slippage: 0.5%
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-4 text-sm text-slate-300/90">
              <div className="glass-panel relative p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Cosmic feed
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-50">
                  Welcome to the Base cosmos
                </h2>
                <p className="mt-3 text-sm text-slate-300/90">
                  This is your cosmic swap deck. Connect your wallet, choose
                  tokens, and soon you&apos;ll route liquidity across Base with a
                  single warp jump.
                </p>
                <ul className="mt-4 space-y-2 text-[12px] text-slate-400">
                  <li>• Network locked to Base mainnet for safety.</li>
                  <li>• Non-custodial — swaps from your wallet only.</li>
                  <li>• UI first — execution routes coming in the next phase.</li>
                </ul>
              </div>

              <div className="glass-panel relative flex-1 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Telemetry
                </p>
                <div className="mt-4 grid gap-3 text-[11px] text-slate-300/90">
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-3">
                    <span className="text-slate-400">Status</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Online · Base
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-3">
                    <span className="text-slate-400">RPC</span>
                    <span className="text-[10px] text-slate-300/90">
                      wagmi public client
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-3">
                    <span className="text-slate-400">Wallets</span>
                    <span className="text-[10px] text-slate-300/90">
                      RainbowKit (MetaMask, WalletConnect, etc.)
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
