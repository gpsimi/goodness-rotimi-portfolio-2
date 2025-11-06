const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>© {currentYear} Goodness Rotimi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

