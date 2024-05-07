export interface hamburgerProps {
  active: boolean;
  mobileNav: any;
}

export function Hamburger({active, mobileNav}: hamburgerProps){

  return (
    <div className={`menu-toggle ${active && "animate" }`} aria-label="Mobile Navigation Toggle" tabIndex={0} onClick={mobileNav}></div>
  );
}