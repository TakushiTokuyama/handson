using System.Security.Cryptography;
using System.Text;

namespace Hash_20210410
{
    public class HashCode
    {
        public string HashConvert(string password)
        {
            // 文字コードを指定して、文字列からバイナリへの変換を行う。
            byte[] bytes = Encoding.ASCII.GetBytes(password);

            // バイナリからハッシュへと変換を行う。
            var hash = SHA512.Create().ComputeHash(bytes);

            return ByteArrayToString(hash);
        }

        static string ByteArrayToString(byte[] arrInput)
        {
            int i;
            StringBuilder sOutput = new StringBuilder(arrInput.Length);
            for (i = 0; i < arrInput.Length; i++)
            {
                // ハッシュから16進数に変換する。
                sOutput.Append(arrInput[i].ToString("X2"));
            }
            return sOutput.ToString();
        }
    }
}
