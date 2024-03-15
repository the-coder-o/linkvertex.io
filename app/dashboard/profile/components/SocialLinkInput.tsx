import { FC } from 'react'

import { Input } from '@/components/ui/input'
import { SocialLinkInputProps } from '@/interfaces/dashboard/profile.interface'

const SocialLinkInput: FC<SocialLinkInputProps> = ({ iconClass, label, value, placeholder, onChange, isValid, validationMessage }) => (
  <>
    <div className={'flex flex-row gap-[1rem]'}>
      <i className={`${iconClass} text-[22px] text-white`}></i>
      <div className={'w-full'}>
        <label className={'text-md text-start font-medium text-white'}>{label}</label>
        <div>
          <Input value={value} onChange={onChange} type={'text'} placeholder={placeholder} className={'mt-[0.5rem] rounded-[20px] border border-[#ffffff29] bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#fff]/60 focus:!border-2 focus:!border-[#63b3ed] focus:!transition'} />
          {!isValid && <p className={'mt-1.5 text-sm text-red-500'}>{validationMessage}</p>}
        </div>
      </div>
    </div>
  </>
)

// Don't forget to export your component!
export default SocialLinkInput
