import CursorProvider from './CursorProvider'
import LenisScrollProvider from './LenisScrollProvider'
import LoadingProvider from './LoadingProvider'
import CookiesProvider from './CookiesProvider'
import NavigationProvider from './NavigationProvider'


interface ProvidersProps
	extends React.PropsWithChildren { }
export default function Providers({ children }: ProvidersProps) {
	return (
		<CursorProvider>
			<LenisScrollProvider>
				<NavigationProvider>
					<LoadingProvider>
						<CookiesProvider>
							{children}
						</CookiesProvider>
					</LoadingProvider>
				</NavigationProvider>
			</LenisScrollProvider>
		</CursorProvider>
	)
}