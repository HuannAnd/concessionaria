import CursorProvider from './CursorContextProvider'
import LenisScrollProvider from './LenisScrollProvider'


interface ProvidersProps {
	children: React.ReactNode
}
export default function Providers({ children }: ProvidersProps) {
	return (
		<CursorProvider>
			<LenisScrollProvider>
				{children}
			</LenisScrollProvider>
		</CursorProvider>
	)
}