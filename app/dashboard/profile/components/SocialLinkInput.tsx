import { Input } from '@/components/ui/input'
import { ChangeEvent, FC } from 'react'

interface SocialLinkInputProps {
  iconClass: string
  label: string
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  isValid: boolean
  validationMessage?: string
}

const SocialLinkInput: FC<SocialLinkInputProps> = ({ iconClass, label, value, placeholder, onChange, isValid, validationMessage }) => (
  <>
    <div className={'flex flex-row gap-[1rem]'}>
      <i className={`${iconClass} text-[22px] text-white`}></i>
      <div className={'w-full'}>
        <label className={'text-start text-white text-md font-medium'}>{label}</label>
        <div>
          <Input value={value} onChange={onChange} type={'text'} placeholder={placeholder} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
          {!isValid && <p className={'text-red-500 text-sm mt-1.5'}>{validationMessage}</p>}
        </div>
      </div>
    </div>
  </>
)

// Don't forget to export your component!
export default SocialLinkInput
