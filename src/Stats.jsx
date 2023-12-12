export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>با اضافه کردن چند مواد غذایی به لیست خود شروع کنید😋</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "همه مواد غذایی آمادست ! بزن بریم😍..."
          : `: تعداد کل مواد اولیه  شما ${numItem} عدد است که مقدار ${percentage} % از لیست شما آماده است .`}
      </em>
    </footer>
  );
}
