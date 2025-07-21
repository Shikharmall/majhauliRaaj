export default function Header() {
  return (
    <header className="bg-[#082366] text-white border-b-3 border-green-500">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4 text-sm">
          <a
            //href="mailto:brijbhusan.singh@sansad.nic.in"
            className="hover:underline"
          >
            majhauliraaj@gmail.com
          </a>
          <span className="border-r border-white pr-4">+91 XXXXX-XXXXX</span>
          <a href="/home/changeLanguage" className="hover:underline">
            हिंदी में देखें
          </a>
        </div>
        <div className="flex space-x-3 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="fab fa-google-plus-g" />
          <a href="#" className="fab fa-linkedin-in" />
        </div>
      </div>
    </header>
  );
}
