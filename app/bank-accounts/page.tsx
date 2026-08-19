"use client";

const bankAccounts = [
  {
    bank: "Meezan Bank",
    accountTitle: "PROPERTY RABBTA (PRIVATE) LIMITED",
    accountNumber: "XXXXXXXXXXXX",
    iban: "PK00 XXXX XXXX XXXX XXXX XXXX",
    branch: "Main Branch",
  },
  {
    bank: "Bank Al Habib",
    accountTitle: "PROPERTY RABBTA (PRIVATE) LIMITED",
    accountNumber: "XXXXXXXXXXXX",
    iban: "PK00 XXXX XXXX XXXX XXXX XXXX",
    branch: "Main Branch",
  },
];

export default function BankAccountsPage() {
  return (
    <main className="min-h-screen bg-[#f5f8f6]">
      {/* Header */}
      <section className="border-b border-[#e4ebe7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#d7a928]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#00643f]">
                Official Payment Information
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#173c2d] sm:text-5xl">
              Official Bank Accounts
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500">
              For your security, please use only the bank accounts listed
              below when making payments to Property Rabbta.
            </p>
          </div>
        </div>
      </section>

      {/* Verification banner */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-[#dcebe2] bg-[#eaf6ef] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00643f] text-white">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h2 className="font-bold text-[#174c37]">
                Verify Before You Pay
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Always verify the account details before transferring funds.
                Property Rabbta will not be responsible for payments made to
                unauthorized accounts.
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-white px-5 py-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Verification WhatsApp
            </p>
            <p className="mt-1 font-bold text-[#00643f]">
              0337 7773316
            </p>
          </div>
        </div>
      </section>

      {/* Accounts */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d19f20]">
            Authorized Accounts
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#173c2d] sm:text-3xl">
            Property Rabbta Bank Details
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {bankAccounts.map((account, index) => (
            <BankCard
              key={account.bank}
              account={account}
              number={index + 1}
            />
          ))}
        </div>
      </section>

      {/* Important notice */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="rounded-2xl bg-[#173c2d] p-7 text-white sm:p-9">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7a928] text-[#173c2d]">
                  !
                </div>

                <h3 className="text-lg font-bold">
                  Important Payment Notice
                </h3>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
                Before making any payment, confirm the bank name, account
                title, account number and IBAN. If you have any doubt,
                contact Property Rabbta through our official WhatsApp
                verification number.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5">
              <p className="text-xs text-white/50">
                Payment Verification
              </p>
              <p className="mt-1 text-lg font-bold text-[#e3bb46]">
                0337 7773316
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BankCard({
  account,
  number,
}: {
  account: {
    bank: string;
    accountTitle: string;
    accountNumber: string;
    iban: string;
    branch: string;
  };
  number: number;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#dfe9e3] bg-white shadow-[0_12px_40px_rgba(0,70,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,70,45,0.10)]">
      {/* Card top */}
      <div className="flex items-center justify-between border-b border-[#edf2ef] px-6 py-5 sm:px-7">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f4ed] text-[#00643f]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M19 21V10" />
              <path d="m3 10 9-7 9 7" />
              <path d="M3 10h18" />
            </svg>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Bank Account {String(number).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#173c2d]">
              {account.bank}
            </h3>
          </div>
        </div>

        <div className="rounded-full bg-[#e8f5ed] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#00643f]">
          Official
        </div>
      </div>

      {/* Details */}
      <div className="space-y-5 p-6 sm:p-7">
        <DetailRow
          label="Account Title"
          value={account.accountTitle}
        />

        <DetailRow
          label="Account Number"
          value={account.accountNumber}
          copy
        />

        <DetailRow
          label="IBAN"
          value={account.iban}
          copy
        />

        <DetailRow
          label="Branch"
          value={account.branch}
        />
      </div>

      {/* Bottom */}
      <div className="border-t border-[#edf2ef] bg-[#fafcfb] px-6 py-4 sm:px-7">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="h-2 w-2 rounded-full bg-[#17a567]" />
          Authorized Property Rabbta account
        </div>
      </div>
    </article>
  );
}

function DetailRow({
  label,
  value,
  copy = false,
}: {
  label: string;
  value: string;
  copy?: boolean;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <div className="flex items-center justify-between gap-4">
        <p className="break-all text-sm font-semibold text-[#214635]">
          {value}
        </p>

        {copy && (
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(value)}
            className="shrink-0 rounded-lg border border-[#dce7e1] px-3 py-1.5 text-[10px] font-bold text-[#00643f] transition hover:bg-[#eaf5ee]"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}