import bs58check from 'bs58check';

export const validateAddress = async (address)=> {
   try {
       const buffer = Buffer.from(address);
       if(buffer.length!==34)
           return false;
       const res = bs58check.decode(address);
       return  res.length === 21 && res[0] === 0x41
   } catch (e) {
       return false;
   }
};