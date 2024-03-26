const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white fonr-blood tracking-tight">
          TheMarmara.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4 ">
          <p className="cursor-pointer">Gizlilik Politikası</p>
          <p className="cursor-pointer">Kullanım Şartları</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
