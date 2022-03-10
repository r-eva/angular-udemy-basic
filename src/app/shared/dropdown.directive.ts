import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[toggleDropDown]'
})
export class DropdownDirective {

    private isShow = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('document: click', ['$event']) toggleShow(event: Event) {
        const buttonGroup = this.elementRef.nativeElement;
        const dropdownMenu = this.elementRef.nativeElement.nextSibling;
        
        if (buttonGroup.contains(event.target)) {
            this.isShow = true;
            this.renderer.addClass(dropdownMenu, 'show');
        } else {
            this.isShow = false;
            if (dropdownMenu) {
                this.renderer.removeClass(dropdownMenu, 'show');
            } 
        }
        this.isShow = !this.isShow;
    }

}

// import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })

// export class DropdownDirective {
//     @HostBinding('class.show') isOpen = false

//     @HostListener('document: click') toggleOpen(even: Event){
//         console.log('clicked')
//         this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//     }
    
//     constructor(private elRef: ElementRef) {}
// }
