const Footer = () => {
  return (
    <footer className="flex justify-between bg-bg-header text-white rounded-sm p-5 mt-[5rem] mb-[1.25rem]">
      <div className="text-justify w-[70%] mr-[1.87rem]">
        <h3 className="mb-[0.625rem] text-2xl font-semibold">سامانه خرید و اجاره ملک</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
