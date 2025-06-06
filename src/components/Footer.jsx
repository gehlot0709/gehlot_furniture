function Footer() {
  return (
    <footer className=" py-6  mt-24">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold uppercase">About Us</h2>
            <p className=" text-gray-400 mt-8">
              Gehlot Furniture delivers premium-quality furniture that enhances 
              homes and workspaces. Discover our collections designed for 
              comfort, style, and durability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold uppercase">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold uppercase">Follow Us</h2>
            <div className="mt-2 flex space-x-4 justify-center md:justify-start">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm text-center">
          © 2025 Gehlot Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;