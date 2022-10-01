---
title: 마인크래프트 기본 리소스팩
date: 2021-08-28
slug: default-pack
tag:
  - Pack
description: 마인크래프트 리소스팩 을 만들려면 일단 베이스가 되는 기본 리소스팩이 있어야합니다.
blockComment: false
---

---

마인크래프트 리소스팩 을 만들려면 일단 베이스가 되는 **기본 리소스팩**이 있어야합니다.

이때 마인크래프트 기본 리소스팩을 얻는 방법에는 두가지가 있습니다.

- [다운받기](#다운받기)
- [추출하기](#추출하기)
  - [마인크래프트 폴더로 가기](#마인크래프트-폴더로-가기)
  - [압축 풀기](#압축-풀기)
  - [pack.mcmeta 파일 만들기](#packmcmeta-파일-만들기)
- [마무리](#마무리)

## 다운받기

먼저 다운받는 법이 있습니다.

[다운로드](https://github.com/ywbird/pack/raw/main/37a8eec1ce19687d132fe29051dca629d164e2c4958ba141d5f4133a33f0688f/default.zip)
제가 직접 추출한거니 안심하셔도 됩니다.
만약 다운로드 파일이 의심스럽다면 [#추출하기](#추출하기)하시면 됩니다.

## 추출하기

추출하는법은 조금 복잡합니다.
먼저 추출을 원하는 마인크래프트 버전을 한번 켯다가 꺼주세요.

### 마인크래프트 폴더로 가기

그후 **마인크래프트** 폴더로 가 줍시다.<br>
`Win+R` 을 눌러 다음 경로를 넣습니다.

> `%appdata%\.minecraft`
> 또는
> `C:\Users\<유저네임>\AppData\Roaming\.minecraft`

입니다.

### 압축 풀기

마인크래프트 폴더내에 📂`version` 이라는 폴더가 있습니다.
📂`version` 폴더 안에 자신이 원하는 버전 이름인 폴더를 열면,
그안에 📄`<자신이원하는 버전>.jar` 파일이 있을겁니다.
이 파일을 **실행하지말고 압축 파일 프로그램으로 연후** `assets` **폴더만 선택해서 압축 해제 해 주세요.**

### pack.mcmeta 파일 만들기

그후 `assets` 폴더를 `Default Resourcepack` 으로 이름지은 폴더에 넣고 같은 폴더에 `pack.mcmeta` 를 생성합니다.(확장자를 보이게 한뒤 `.txt` 파일 생성후 이름을 바꾼다.)
`pack.mcmeta` 의 내용은 이러합니다.

```json pack.mcmeta
{
  "pack": {
    "pack_format": 1,
    "description": "Default Resourcepack"
  }
}
```

여기서 `"pack_format"` 부분은 팩을 쓸 수 있는 마인크래프트의 버전입니다.

| 숫자 |      버전       |
| :--: | :-------------: |
|  1   |  1.6.1 – 1.8.9  |
|  2   |  1.9 – 1.10.2   |
|  3   |  1.11 – 1.12.2  |
|  4   |  1.13 – 1.14.4  |
|  5   |  1.15 – 1.16.1  |
|  6   | 1.16.2 – 1.16.5 |
|  7   |      1.17+      |

또 `"description"` 부분은 팩의 설명 입니다. 일단은 `"Default resourcepack"` 으로 써놓으세요. 나중에 팩을 만들때 바꾸면 됩니다.

## 마무리

이상으로 **마인크래프트 기본 리소스팩** 포스팅을 마치겠습니다.