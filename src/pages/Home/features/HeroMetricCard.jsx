const HeroMetricCard = ({ value, label, icon }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-6 py-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.6)] backdrop-blur-md">
      <div>
        <div className="text-3xl font-bold leading-none">{value}</div>
        <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/70">
          {label}
        </div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
        {icon}
      </div>
    </div>
  );
};

export default HeroMetricCard;
