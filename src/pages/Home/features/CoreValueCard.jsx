const CoreValueCard = ({ title, badge, description, icon }) => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-black/5">
      <div className="absolute inset-y-0 left-0 w-2 rounded-l-3xl bg-gradient-to-l from-slate-900 to-blue-900" />
      <div className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl" />
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900">
          {icon}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-900/30 to-black/0" />
        <div className="rounded-full bg-blue-50 px-4 py-2.5">
          <span className="text-xs font-medium text-slate-900">{badge}</span>
        </div>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-5 text-base leading-7 text-gray-700">{description}</p>
    </article>
  );
};

export default CoreValueCard;
