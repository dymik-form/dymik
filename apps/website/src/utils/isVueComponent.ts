export function isVueComponent(component: any): boolean {
    return component && (typeof component === 'object' || typeof component === 'function') && 'render' in component;
}