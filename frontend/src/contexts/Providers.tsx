import CursorProvider from './CursorContextProvider'
import LenisScrollProvider from './LenisScrollProvider'
import LoadingProvider from './LoadingProvider'


interface ProvidersProps {
	children: React.ReactNode
}
export default function Providers({ children }: ProvidersProps) {
	return (
		<CursorProvider>
			<LenisScrollProvider>
				<LoadingProvider>
					{children}
				</LoadingProvider>
			</LenisScrollProvider>
		</CursorProvider>
	)
}