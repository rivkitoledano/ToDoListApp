using System.Text.RegularExpressions;
using XXX;
string paragraph = "The quick brown fox@##%DDFGHJHGF jumps over the lazy dog. It barked.";

//1 regax
string pattern = @"[A-Za-z]+";
MatchCollection matches = Regex.Matches(paragraph, pattern);
Console.WriteLine(matches
                   .OrderByDescending(match => match.Length)
                                    .FirstOrDefault());
//2 big leeter 
List<String> words = paragraph.Split(' ').ToList();
for (int i = 0; i < words.Count; i++)
{
    if (words[i].Length != 0)
    words[i] = words[i].Substring(0, 1).ToUpper() + words[i].Substring(1);
}
paragraph = string.Join(" ",words);
Console.WriteLine( paragraph );
//3 pow
Console.WriteLine(Math.Pow(2,4));
//4 sort string
String str = "gsagashus";
Char[] chars =str.ToCharArray();
Array.Sort(chars);
str=new string(chars);
Console.WriteLine(str);
