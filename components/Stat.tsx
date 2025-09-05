type Props = { label: string; value: string };

export default function Stat({ label, value }: Props) {
  return (
    <div className="border border-gray-300 p-4">
      <div className="text-sm text-gray-700">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}


