const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 animate-slide-in-from-top">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary animate-scale-in">Goodness Rotimi</h2>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors hover:scale-110 duration-200">About</a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors hover:scale-110 duration-200">Work</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors hover:scale-110 duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

