export const useLazyImg = (
	node: HTMLElement,
	{
		root = null,
		rootMargin = '0px 0px 0px 0px',
		threshold = 0.0
	}: {
		root?: Element | Document | null;
		rootMargin?: string;
		threshold?: number | number[];
	} = {}
) => {
	if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const image = entry.target as HTMLImageElement;

						if (image.dataset.src) {
							image.src = image.dataset.src;
						}

						if (image.dataset.srcset) {
							image.srcset = image.dataset.srcset;
						}

						observer.unobserve(image);
					}
				});
			},
			{
				root,
				rootMargin,
				threshold
			}
		);
		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
};
