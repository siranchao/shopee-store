'use client'
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Category } from "@/types"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import useLoginModal from "@/hooks/use-login"


interface MainNavProps {
    data: Category[]
}

export function NavigationMenuDemo({ data }: any) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4 grid-cols-1">
                        {data.map((item: any) => (
                        <ListItem
                            key={item.href}
                            title={item.label}
                            href={item.href}
                        />
                        ))}
                    </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
   
const ListItem = React.forwardRef<React.ElementRef<"a">,React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    const pathName = usePathname()
    
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    pathName === props.href && "bg-accent text-accent-foreground",
                    )}
                    
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


export default function MainNav({ data }: MainNavProps) {

    const pathName = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`
    }))

    const loginModal = useLoginModal()

    const onLogin = () => {
        loginModal.onOpen()
    }

    return (
        <>
            <nav className="flex items-center sm:mx-4">
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Shop Now</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-[250px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                            >
                                                <Image src="/logo4.png" alt="logo" width={400} height={400} className="object-contain" />
                            
                                                <div className="mb-2 mt-4 font-medium text-sm text-muted-foreground">
                                                    <span className="text-lg pr-1">Shopee</span> is an open-source platform provides small business with simple and easy e-commerce solution.
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="https://github.com/siranchao/shopee-store" title="About Us" target="_blank">
                                        Learn more about our open-source code solution
                                    </ListItem>
                                    <ListItem href={`${process.env.NEXT_PUBLIC_ADMIN_URL}`} title="Admin Center" target="_blank">
                                        Visit admin center to manage your store
                                    </ListItem>
                                    <ListItem onClick={onLogin} title="Shopee Membership" >
                                        Join Shopee Membership to get more benefits and discounts
                                    </ListItem>
                                </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden">
                    <NavigationMenuDemo data={routes}/>
                </div>

                <div className="mx-4 flex flex-wrap items-center space-x-4 lg:space-x-6 max-lg:hidden">
                    {routes.map((route) => (
                        <Link 
                            href={route.href} 
                            key={route.href}
                            className={cn("whitespace-nowrap text-sm font-medium transition-colors hover:text-black", route.active ? "text-black" : "text-neutral-500")}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>


            </nav>
        </>
    )
}