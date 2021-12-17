export type KintonePlugin = {
  author: string;
  name: string;
  url: string;
  priceType:
    | "無料"
    | "買い切り"
    | "サブスクリプション(月額)"
    | "サブスクリプション(年額)";
  price: number | "要相談";
  closed?: boolean;
  trialVersion?: boolean;
};

export const KINTONE_PLUGINS: KintonePlugin[] = [
  {
    author: "Ribbit.work",
    name: "関連付けないルックアッププラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-unrelated-lookup",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "一覧高速検索＆絞り込みプラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-smart-view/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "リアルタイムテーマ変更プラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-theme/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "フィールドデータコピー",
    url: "https://ribbit.work/kintone-plugin",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "年齢自動計算プラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-age/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "同一アプリ(自アプリ)ルックアッププラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-lookup-myself/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Ribbit.work",
    name: "Excel出力プラグイン",
    url: "https://ribbit.work/blog/kintone-plugin-xlsx/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "TAMSAN",
    name: "kintone with Sansan",
    url: "https://www.atpress.ne.jp/news/225525",
    price: 50000,
    priceType: "サブスクリプション(年額)",
  },
  {
    author: "株式会社ノベルワークス",
    name: "キン助 kintone × Googleカレンダー双方向連携プラグイン",
    url: "https://www.novelworks.jp/kinsche/",
    trialVersion: true,
    price: 3000,
    priceType: "サブスクリプション(月額)",
  },
  {
    author: "Atsushi-Eda",
    name: "関連サブテーブル行一覧プラグイン",
    url: "https://github.com/Atsushi-Eda/related-table-row",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Atsushi-Eda",
    name: "カスタム関連レコードプラグイン",
    url: "https://github.com/Atsushi-Eda/custom-reference-table",
    price: 0,
    priceType: "無料",
  },
  {
    author: "Atsushi-Eda",
    name: "サブテーブル分割プラグイン",
    url: "https://github.com/Atsushi-Eda/table-split",
    price: 0,
    priceType: "無料",
  },
  {
    author: "株式会社エミック",
    name: "Referrer-Policy for kintone",
    url: "https://github.com/emic/referrer-policy-for-kintone",
    price: 0,
    priceType: "無料",
  },
  {
    author: "KシステムSHOP",
    name: "一覧ソートマーク追加プラグイン",
    url: "https://k-systemshop.stores.jp/items/5e9694d134ef013d3ae3e012",
    price: 0,
    priceType: "無料",
  },
  {
    author: "KシステムSHOP",
    name: "アイテム説明単語CSS",
    url: "https://k-systemshop.stores.jp/items/5e941a59bd217858b07c45ab",
    price: 0,
    priceType: "無料",
  },
  {
    author: "KシステムSHOP",
    name: "見えるチェックBoxプラグイン",
    url: "https://k-systemshop.stores.jp/items/5e3bec79cf327f5242daa1c7",
    price: 2500,
    priceType: "買い切り",
  },
  {
    author: "KシステムSHOP",
    name: "一覧クリック強化プラグイン",
    url: "https://k-systemshop.stores.jp/items/5e644f5b68c4620f7d53486c",
    price: 3500,
    priceType: "買い切り",
  },
  {
    author: "potara",
    name: "現在時刻入力プラグイン",
    url: "https://potara.net/plugin/current-time/",
    price: 33000,
    priceType: "買い切り",
  },
  {
    author: "potara",
    name: "いいね！プラグインEX（devnetの機能追加版）プラグイン",
    url: "https://potara.net/plugin/vote-ex/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "potara",
    name: "条件書式プラグイン EX",
    url: "https://potara.net/plugin/conditional-format-ex/",
    price: 0,
    priceType: "無料",
  },
  {
    author: "potara",
    name: "Exif読取プラグイン",
    url: "https://potara.net/plugin/exif-reader/",
  },
  {
    author: "potara",
    name: "画像コピープラグイン",
    url: "https://potara.net/plugin/copy-image/",
  },
  {
    author: "potara",
    name: "バーコード読み取り（検索用）プラグイン",
    url: "https://potara.net/plugin/barcode-scanner-for-search/",
  },
  {
    author: "potara",
    name: "素早く手書き プラグイン",
    url: "https://potara.net/plugin/quick-handwriting-on-photo/",
  },
  {
    author: "potara",
    name: "QRコード生成 プラグイン",
    url: "https://potara.net/plugin/qrcode-generator/",
  },
  {
    author: "potara",
    name: "QRコード読み取り（検索用）プラグイン",
    url: "https://potara.net/plugin/qrcode-scanner-for-search/",
  },
  {
    author: "potara",
    name: "日付変換（和暦、漢数字）プラグイン",
    url: "https://potaracom.stores.jp/items/5d8389531b6b767a41de4931",
  },
  {
    author: "Seseragi",
    name: "System 表示非表示指定プラグイン",
    url: "https://www.seseragi-system.com/selectshowingfields-plugin-2/",
  },
  {
    author: "Seseragi",
    name: "System 地図表示プラグイン",
    url: "https://www.seseragi-system.com/showingmap-plugin-2/",
  },
  {
    author: "株式会社ソフトクリエイト",
    name: "マネーフォワード クラウド請求書連携プラグイン",
    url: "https://www.softcreate.co.jp/kintone-mfcloud",
  },
  {
    author: "株式会社アディエム",
    name: "タブ表示プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/tabview/",
  },
  {
    author: "株式会社アディエム",
    name: "簡単検索ボックスプラグイン",
    url: "https://adiem.jp/products/kintone-plugin/simple-search/",
  },
  {
    author: "株式会社アディエム",
    name: "独自ルックアップ画面プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/original-lookup/",
  },
  {
    author: "株式会社アディエム",
    name: "ツールチップ プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/tooltip/",
  },
  {
    author: "株式会社アディエム",
    name: "ルックアップ反映プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/lookupreflection/",
  },
  {
    author: "株式会社アディエム",
    name: "テーブル一覧表示プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/table-display/",
  },
  {
    author: "株式会社アディエム",
    name: "フィールド一括更新プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/field-bulk-update/",
  },
  {
    author: "株式会社アディエム",
    name: "入力規制プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/input-check/",
  },
  {
    author: "株式会社アディエム",
    name: "レコード一覧計算プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/index-aggregate/",
  },
  {
    author: "株式会社アディエム",
    name: "ユーザ連動ルックアッププラグイン",
    url: "https://adiem.jp/products/kintone-plugin/user-lookup/",
  },
  {
    author: "株式会社アディエム",
    name: "選択絞込みプラグイン",
    url: "https://adiem.jp/products/kintone-plugin/selection-filtering/",
  },
  {
    author: "株式会社アディエム",
    name: "有給休暇申請プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/paid-holiday/",
  },
  {
    author: "株式会社アディエム",
    name: "アプリ内ルックアッププラグイン",
    url: "https://adiem.jp/products/kintone-plugin/app-lookup/",
  },
  {
    author: "株式会社アディエム",
    name: "勤怠登録プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/punch/",
  },
  {
    author: "株式会社アディエム",
    name: "テーブル拡張プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/table-extension/",
  },
  {
    author: "株式会社アディエム",
    name: "ルックアップ元追加プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/lookup-master/",
  },
  {
    author: "株式会社アディエム",
    name: "データ同期プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/data-sync/",
  },
  {
    author: "株式会社アディエム",
    name: "フィールド結合プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/field-join/",
  },
  {
    author: "株式会社アディエム",
    name: "テーブルデータコピープラグイン",
    url: "https://adiem.jp/products/kintone-plugin/table-data-copy/",
  },
  {
    author: "株式会社アディエム",
    name: "テーブルへのコピープラグイン",
    url: "https://adiem.jp/products/kintone-plugin/copy-to-table/",
  },
  {
    author: "株式会社アディエム",
    name: "関連レコード集計 プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/related-record-aggregation/",
  },
  {
    author: "株式会社アディエム",
    name: "自動採番プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/auto-numbering/",
  },
  {
    author: "株式会社アディエム",
    name: "住所自動入力プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/autoinput-address/",
  },
  {
    author: "株式会社アディエム",
    name: "書式設定プラグイン",
    url: "https://adiem.jp/products/kintone-plugin/conditional-format/",
  },
  {
    author: "クローバ株式会社",
    name: "kinnote（キンノート）プラグイン",
    url: "https://www.joyzo.co.jp/plugin_free/kinnote",
  },
  {
    author: "Teru",
    name: "横からすみません",
    url: "http://nevermyroad.com/?p=524",
  },
  {
    author: "Teru",
    name: "既読プラグイン",
    url: "http://nevermyroad.com/?p=402",
  },
  {
    author: "Teru",
    name: "プロセスGO",
    url: "http://nevermyroad.com/?p=389",
  },
  {
    author: "あかざわ工房",
    name: "Simple 自動付番プラグイン",
    url: "https://akazawa.shop/items/5c3f3d0a7cd3616d9401bde9",
  },
  {
    author: "あかざわ工房",
    name: "Gsenderプラグイン",
    url: "https://akazawa.shop/items/5b1cb59c122a7d053a000de9",
  },
  {
    author: "株式会社ウェブウェア",
    name: "テーブル拡張プラグイン",
    url: "https://webware.theshop.jp/blog/2018/06/26/114409",
  },
  {
    author: "株式会社ウェブウェア",
    name: "計算プラグイン",
    url: "https://webware.theshop.jp/blog/2018/06/04/164755",
  },
  {
    author: "株式会社ウェブウェア",
    name: "ルックアップ拡張プラグイン",
    url: "https://webware.theshop.jp/blog/2018/05/23/145943",
  },
  {
    author: "株式会社ウェブウェア",
    name: "年月入力プラグイン",
    url: "https://webware.theshop.jp/blog/2018/05/23/150818",
  },
  {
    author: "株式会社ウェブウェア",
    name: "フィールド非表示プラグイン",
    url: "https://webware.theshop.jp/blog/2018/05/23/145927",
  },
  {
    author: "株式会社ウェブウェア",
    name: "ツールチッププラグイン",
    url: "https://webware.theshop.jp/blog/2018/07/06/181114",
  },
  {
    author: "searchight",
    name: "Slack連携プラグイン",
    url: "https://qiita.com/7749satellite/items/a818c8a6881c56ef6f4f",
  },
  {
    author: "あっとクリエーション株式会社",
    name: "ジオコーディングプラグイン",
    url: "http://www.at-creation.co.jp/kintone_plugin/#title1",
  },
  {
    author: "あっとクリエーション株式会社",
    name: "ジオコーディングプラグイン",
    url: "http://www.at-creation.co.jp/kintone_plugin/#title1",
  },
  {
    author: "tonio0720",
    name: "かんたん検索プラグイン",
    url: "https://qiita.com//tonio0720/items/eea3fd817894164382c3",
  },
  {
    author: "デジタルサーブ株式会社",
    name: "みえる、PDF",
    url: "http://www.digital-serve.co.jp/product/kintone-plugin-pdf/",
  },
  {
    author: "株式会社日立ケーイーシステムズ",
    name: "タブ表示プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/integrate/hke002.html",
  },
  {
    author: "株式会社日立ケーイーシステムズ",
    name: "和暦表示プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/integrate/hke005.html",
  },
  {
    author: "株式会社日立ケーイーシステムズ",
    name: "簡単検索プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/integrate/hke003.html",
  },
  {
    author: "株式会社日立ケーイーシステムズ",
    name: "重複削除プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/integrate/hke004.html",
  },
  {
    author: "株式会社日立ケーイーシステムズ",
    name: "ルックアップ編集登録プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/integrate/hke006.html",
  },
  {
    author: "エーアイティ研究所",
    name: "日付変換プラグイン",
    url: "http://www.ait-labo.com/services/system/kintone-plugin/date-conversion/",
  },
  {
    author: "エーアイティ研究所",
    name: "簡易スクロールプラグイン",
    url: "http://www.ait-labo.com/system/kintone-plugin/simple_scroll/",
  },
  {
    author: "エーアイティ研究所",
    name: "自動全角⇔半角変換プラグイン",
    url: "http://www.ait-labo.com/system/kintone-plugin/autochange-zh/",
  },
  {
    author: "エーアイティ研究所",
    name: "吹き出しメッセージ表示プラグイン",
    url: "http://www.ait-labo.com/system/kintone-plugin/field-tooltip/",
  },
  {
    author: "かりんこラボ",
    name: "日付計算プラグイン",
    url: "https://caryncolabo.com/kintone_plugin/manipulatedays/",
  },
  {
    author: "かりんこラボ",
    name: "年度記録プラグイン",
    url: "https://caryncolabo.com/kintone_plugin/fillupfy/",
  },
  {
    author: "かりんこラボ",
    name: "プロセス管理履歴記録プラグインPro",
    url: "https://caryncolabo.com/kintone_plugin/statusloggingpro/",
  },
  {
    author: "かりんこラボ",
    name: "お手軽アクセス数記録プラグイン",
    url: "https://caryncolabo.com/kintone_plugin/pvcounter/",
  },
  {
    author: "かりんこラボ",
    name: "ワンボタン入力プラグイン",
    url: "https://caryncolabo.com/kintone_plugin/directedit/",
  },
  {
    author: "かりんこラボ",
    name: "日付加算減算プラグイン 無料版",
    url: "https://caryncolabo.com/kintone_plugin/adddays/",
  },
  {
    author: "かりんこラボ",
    name: "年度記録プラグイン 無料版",
    url: "https://caryncolabo.com/kintone_plugin/recordingfy/",
  },
  {
    author: "かりんこラボ",
    name: "プロセス管理履歴記録プラグイン 無料版",
    url: "https://caryncolabo.com/kintone_plugin/statuslogging/",
  },
  {
    author: "かりんこラボ",
    name: "メール転記プラグイン 無料版",
    url: "https://caryncolabo.com/kintone_plugin/copyintoemail/",
  },
  {
    author: "かりんこラボ",
    name: "変更通知プラグイン 無料版",
    url: "https://caryncolabo.com/kintone_plugin/changenotification/",
  },
  {
    author: "株式会社アーセス",
    name: "サブテーブルルックアッププラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "一覧画面でコメント閲覧プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "一覧画面で文字列複数行を改行表示させるプラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "プロセスごとの必須入力設定プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "フィールドレイアウト数値指定プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "タブ区切りプラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "GoogleMap リンク プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "日付⇒曜日変換プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "サブテーブル歯抜け足し算プラグイン",
    url: "https://smartballoon.jp/kintone/plugins",
  },
  {
    author: "株式会社アーセス",
    name: "KOUTEIガントチャートプラグイン",
    url: "https://smartballoon.jp/kintone/plugins/ganttchart",
  },
  {
    author: "株式会社アーセス",
    name: "KANBANタスク管理プラグイン",
    url: "https://smartballoon.jp/kintone/plugins/taskmanagement",
  },
  {
    author: "株式会社アーセス",
    name: "KOYOMIスケジュール管理プラグイン",
    url: "https://smartballoon.jp/kintone/plugins/koyomi",
  },
  {
    author: "グレープシティ株式会社",
    name: "krewDashboard",
    url: "https://krew.grapecity.com/products/krewdashboard.htm",
  },
  {
    author: "グレープシティ株式会社",
    name: "krewData",
    url: "https://krew.grapecity.com/products/krewdata.htm",
  },
  {
    author: "グレープシティ株式会社",
    name: "krewSheet",
    url: "https://krew.grapecity.com/",
  },
  {
    author: "合同会社桃山．舎",
    name: "リンクボタンプラス(一覧用)プラグイン",
    url: "http://www.momoyama.org/kintone/plugin/linkplus",
  },
  {
    author: "合同会社桃山．舎",
    name: "郵便番号検索プラスプラグイン",
    url: "https://online.momoyama.org/items/5980768",
  },
  {
    author: "合同会社桃山．舎",
    name: "郵便番号検索プラスプラグイン二つ目",
    url: "https://online.momoyama.org/items/5980838",
  },
  {
    author: "株式会社ノベルワークス",
    name: "アプリ間コピープラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/interappcopy_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "Excel読み込みプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/excelimport_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "サブテーブル集計プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/subtablecalc_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "添付ファイル一括書き出しプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/attachment_all_dl_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "簡易印刷設定プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/easy_form_designer",
  },
  {
    author: "株式会社ノベルワークス",
    name: "Ai名刺取り込みプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/businesscardocr_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "添付ファイル拡張プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/tenpu_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "Googleコンタクト連携プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/google_contact_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "Googleカレンダー連携プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/google_calendar_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "モバイル版アクションプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/mobile_action_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "一括CUD(登録・更新・削除)プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/allkintonemethods_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "jsonバックアッププラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/json_bk_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "即時アクションプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/action_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "年齢算出プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/ageconv_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "和暦変換プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/wareconv_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "添付ファイル一括書き出しプラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/use_attachment_all_dl_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "レコード一括操作プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/use_allkintonemethods_plugin",
  },
  {
    author: "株式会社ノベルワークス",
    name: "簡易印刷設定プラグイン",
    url: "https://www.novelworks.jp/kintone_plugin/easy_form_designer",
  },
  {
    author: "SPICA",
    name: "GMAIL自動送信",
    url: "https://spica.tokyo/marron",
  },
  {
    author: "SPICA",
    name: "機能拡張スタンダード All-In（BlueLaunch）",
    url: "https://spica.tokyo/bluelaunch",
  },
  {
    author: "関東情報サービス株式会社",
    name: "timelyally(タイムリーアライ)",
    url: "https://kintone-sol.cybozu.co.jp/integrate/kisl001.html",
  },
  {
    author: "SendGrid",
    name: "kintone プラグイン",
    url: "https://sendgrid.kke.co.jp/blog/?p=4248",
  },
  {
    author: "JBAT",
    name: "ATTAZoo U",
    url: "https://www.jbat.co.jp/lp/attazoou/",
  },
  {
    author: "JBAT",
    name: "プラグインセットATTAZoo",
    url: "http://www.jbat.co.jp/lp/attazoo.html/",
  },

  {
    author: "株式会社テクネコ",
    name: "OpenStreetMapプラグイン",
    url: "http://techneco.co.jp/news/archives/6",
  },
  {
    author: "株式会社テクネコ",
    name: "プロセス表示プラグイン",
    url: "http://www.techneco.co.jp/news/archives/4#post-detail",
  },
  {
    author: "株式会社テクネコ",
    name: "行間詰めプラグイン",
    url: "http://www.techneco.co.jp/news/archives/5",
  },
  {
    author: "TiS",
    name: "ポータル内アプリ表示プラグイン",
    url: "https://tis2010.jp/portalviewer/",
  },
  {
    author: "TiS",
    name: "添付ファイル一括ダウンロードプラグイン",
    url: "https://tis2010.jp/filecompress/",
  },
  {
    author: "TiS",
    name: "条件分岐処理プラグイン",
    url: "https://tis2010.jp/branchprocess/",
  },
  {
    author: "TiS",
    name: "アプリ間レコード集計プラグイン",
    url: "https://tis2010.jp/referencecalc/",
  },
  {
    author: "TiS",
    name: "ふりがな取得プラグイン",
    url: "https://tis2010.jp/phonetic/",
  },
  {
    author: "Tis",
    name: "他画面ポップアップ表示プラグイン",
    url: "https://tis2010.jp/inlineviewer/",
  },
  {
    author: "TiS",
    name: "関連サブテーブル一覧表示プラグイン",
    url: "https://www.tis2010.jp/referencedtable/",
  },
  {
    author: "TiS",
    name: "評価スコア計算プラグイン",
    url: "https://www.tis2010.jp/scorecalc/",
  },
  {
    author: "TiS",
    name: "バーコード読み取りプラグイン",
    url: "https://www.tis2010.jp/barcodereader/",
  },
  {
    author: "TiS",
    name: "連続利用時間制限プラグイン",
    url: "https://www.tis2010.jp/timelimit/",
  },
  {
    author: "TiS",
    name: "感情分析プラグイン",
    url: "https://www.tis2010.jp/sentimentanalysis/",
  },
  {
    author: "TiS",
    name: "テキスト検出プラグイン",
    url: "https://www.tis2010.jp/textdetection/",
  },
  {
    author: "TiS",
    name: "削除レコード復元プラグイン",
    url: "https://www.tis2010.jp/avoiddeletion/",
  },
  {
    author: "TiS",
    name: "ドラッグスクロールプラグイン",
    url: "https://www.tis2010.jp/dragscroll/",
  },
  {
    author: "TiS",
    name: "一覧画面印刷プラグイン",
    url: "https://www.tis2010.jp/listprint/",
  },
  {
    author: "TiS",
    name: "フィールド非表示プラグイン",
    url: "https://www.tis2010.jp/fieldhidden/",
  },
  {
    author: "TiS",
    name: "添付ファイル表示プラグイン",
    url: "https://www.tis2010.jp/openattachment/",
  },
  {
    author: "TiS",
    name: "住所/緯度経度変換プラグイン",
    url: "http://www.tis2010.jp/geocoding/",
  },
  {
    author: "TiS",
    name: "関連フィールドデータ一括取得プラグイン",
    url: "http://www.tis2010.jp/relations/",
  },
  {
    author: "TiS",
    name: "一覧画面編集プラグイン",
    url: "http://www.tis2010.jp/grideditor/",
  },
  {
    author: "TiS",
    name: "タイムテーブル表作成プラグイン",
    url: "http://www.tis2010.jp/timetable/",
  },
  {
    author: "TiS",
    name: "フィールド遷移キー追加プラグイン",
    url: "http://www.tis2010.jp/keytransition/",
  },
  {
    author: "TiS",
    name: "テーブルデータ一括表示プラグイン",
    url: "http://www.tis2010.jp/listviewer/",
  },
  {
    author: "TiS",
    name: "ルックアップデータ変換プラグイン",
    url: "http://www.tis2010.jp/lookupexchange/",
  },
  {
    author: "TiS",
    name: "一覧レコード集計/コピープラグイン",
    url: "https://www.tis2010.jp/listcopy/",
  },
  {
    author: "TiS",
    name: "日程・工程・稼働表作成プラグイン",
    url: "https://www.tis2010.jp/ganttchart/",
  },
  {
    author: "TiS",
    name: "複数日付選択カレンダープラグイン",
    url: "https://www.tis2010.jp/multicalendar/",
  },
  {
    author: "TiS",
    name: "日付計算プラグイン",
    url: "https://www.tis2010.jp/datecalc/",
  },
  {
    author: "TiS",
    name: "ルックアップ/階層区分対応ドロップダウン変換プラグイン",
    url: "https://www.tis2010.jp/lookupfilter/",
  },
  {
    author: "TiS",
    name: "ステータス連動必須フィールド設定プラグイン",
    url: "https://www.tis2010.jp/processlinked/",
  },
  {
    author: "TiS",
    name: "課税区分別合計金額算出プラグイン",
    url: "https://www.tis2010.jp/taxcalc/",
  },
  {
    author: "TiS",
    name: "ログインユーザー連動各種設定プラグイン",
    url: "https://www.tis2010.jp/userlinked/",
  },
  {
    author: "TiS",
    name: "フィールド情報/データ一括更新プラグイン",
    url: "https://www.tis2010.jp/bulksettings/",
  },
  {
    author: "TiS",
    name: "項目選択フィールド連動各種設定プラグイン",
    url: "https://www.tis2010.jp/itemlinked/",
  },
  {
    author: "TiS",
    name: "勤務シフト表/出勤簿作成プラグイン",
    url: "https://www.tis2010.jp/workshift/",
  },
  {
    author: "TiS",
    name: "カテゴリー別アプリ一覧表示プラグイン",
    url: "https://www.tis2010.jp/applist/",
  },
  {
    author: "TiS",
    name: "一覧レコード一括更新/クリアプラグイン",
    url: "https://www.tis2010.jp/bulkupdate/",
  },
  {
    author: "TiS",
    name: "都道府県/市区町村/町名/郵便番号変換プラグイン",
    url: "https://www.tis2010.jp/addressfilter/",
  },
  {
    author: "TiS",
    name: "郵便バーコード生成プラグイン",
    url: "https://www.tis2010.jp/postalbarcode/",
  },
  {
    author: "TiS",
    name: "ツリー構造一覧表示プラグイン",
    url: "https://www.tis2010.jp/treeviewer/",
  },
  {
    author: "TiS",
    name: "アプリ間レコード更新プラグイン",
    url: "https://www.tis2010.jp/referenceupdate/",
  },
  {
    author: "TiS",
    name: "ルックアップ階層別一覧表示プラグイン",
    url: "https://www.tis2010.jp/lookupviewer/",
  },
  {
    author: "TiS",
    name: "アプリ間レコードコピープラグイン",
    url: "https://www.tis2010.jp/recordtransfer/",
  },
  {
    author: "TiS",
    name: "在庫管理プラグイン",
    url: "https://www.tis2010.jp/itemstock/",
  },
  {
    author: "TiS",
    name: "QRコード読み取りプラグイン",
    url: "https://www.tis2010.jp/qrreader/",
  },
  {
    author: "TiS",
    name: "ルックアップアプリ表示プラグイン",
    url: "https://www.tis2010.jp/lookupreferer/",
  },
  {
    author: "TiS",
    name: "一覧テキスト絞り込み検索プラグイン",
    url: "https://www.tis2010.jp/textsearch/",
  },
  {
    author: "TiS",
    name: "曜日計算プラグイン",
    url: "https://www.tis2010.jp/weekcalc/",
  },
  {
    author: "TiS",
    name: "祝日名取得プラグイン",
    url: "https://www.tis2010.jp/holidaycalc/",
  },
  {
    author: "TiS",
    name: "ルックアップレコードコピープラグイン",
    url: "https://www.tis2010.jp/lookupcopy/",
  },
  {
    author: "TiS",
    name: "テーブル行自動追加プラグイン",
    url: "https://www.tis2010.jp/autoaddition/",
  },
  {
    author: "TiS",
    name: "各種月次集計プラグイン",
    url: "https://www.tis2010.jp/monthlysummary/",
  },
  {
    author: "TiS",
    name: "テーブルデータコピープラグイン",
    url: "https://www.tis2010.jp/tabletransfer/",
  },
  {
    author: "TiS",
    name: "一覧集計プラグイン",
    url: "https://www.tis2010.jp/listsummary/",
  },
  {
    author: "TiS",
    name: "ユーザー/組織/グループ属性取得プラグイン",
    url: "https://www.tis2010.jp/userproperies/",
  },
  {
    author: "TiS",
    name: "フィールドデータコピープラグイン",
    url: "https://www.tis2010.jp/fieldcopy/",
  },
  {
    author: "TiS",
    name: "入力ヒント表示プラグイン",
    url: "https://www.tis2010.jp/placeholder/",
  },
  {
    author: "TiS",
    name: "テーブル複数行初期表示プラグイン",
    url: "https://www.tis2010.jp/bulidtable/",
  },
  {
    author: "TiS",
    name: "定例レコード一括生成プラグイン",
    url: "https://www.tis2010.jp/regularrecords/",
  },
  {
    author: "TiS",
    name: "テーブルデータ一括編集プラグイン",
    url: "https://www.tis2010.jp/tableeditor/",
  },
  {
    author: "TiS",
    name: "請求書作成プラグイン",
    url: "https://www.tis2010.jp/invoice/",
  },
  {
    author: "TiS",
    name: "サブテーブルソートプラグイン",
    url: "https://www.tis2010.jp/tablesort/",
  },
  {
    author: "TiS",
    name: "ルックアップ動的絞り込みプラグイン",
    url: "https://www.tis2010.jp/lookupbridge/",
  },
  {
    author: "TiS",
    name: "関連レコード一覧フィールド集計プラグイン",
    url: "https://www.tis2010.jp/referencesummary/",
  },
  {
    author: "TiS",
    name: "ルックアップ内サブテーブルコピープラグイン",
    url: "https://www.tis2010.jp/lookuptable/",
  },
  {
    author: "TiS",
    name: "日付フィールド入力補助プラグイン",
    url: "https://www.tis2010.jp/datefill/",
  },
  {
    author: "TiS",
    name: "再利用レコード初期化プラグイン",
    url: "https://www.tis2010.jp/reuseinitialize/",
  },
  {
    author: "TiS",
    name: "レコード重複チェックプラグイン",
    url: "https://www.tis2010.jp/doublecheck/",
  },
  {
    author: "TiS",
    name: "Sansan名刺連携プラグイン【人物編】",
    url: "https://www.tis2010.jp/sansanperson/",
  },
  {
    author: "TiS",
    name: "GMail連携プラグイン",
    url: "https://www.tis2010.jp/gmail/",
  },
  {
    author: "TiS",
    name: "Googleカレンダー連携プラグイン",
    url: "https://www.tis2010.jp/googlecalendar/",
  },
  {
    author: "TiS",
    name: "チャットワーク連携プラグイン【通知編】",
    url: "https://www.tis2010.jp/chatworkpush/",
  },
  {
    author: "TiS",
    name: "チャットワーク連携プラグイン【タスク編】",
    url: "https://www.tis2010.jp/chatworktask/",
  },
  {
    author: "TiS",
    name: "チャットワーク連携プラグイン【ユーザー間メッセージ表示編】",
    url: "https://www.tis2010.jp/chatworkuser/",
  },
  {
    author: "TiS",
    name: "チャットワーク連携プラグイン【ルーム内メッセージ表示編】",
    url: "https://www.tis2010.jp/chatworkroom/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【勘定科目編】",
    url: "https://www.tis2010.jp/freeeaccounts/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【品目編】",
    url: "https://www.tis2010.jp/freeeitems/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【部門編】",
    url: "https://www.tis2010.jp/freeesections/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【口座編】",
    url: "https://www.tis2010.jp/freeewalletables/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【取引先編】",
    url: "https://www.tis2010.jp/freeepartners/",
  },
  {
    author: "TiS",
    name: "会計ソフトFreee連携プラグイン【取引編】",
    url: "https://www.tis2010.jp/freeedeals/",
  },
  {
    author: "LogicHeart",
    name: "漢字かな変換プラグイン",
    url: "https://github.com/logicheart/kintone-autokana",
  },
  {
    author: "dai0916",
    name: "kintone × Markdown プラグイン",
    url: "http://qiita.com/dai0916/items/532dd7369e3c897989e7",
  },
  {
    author: "H2O",
    name: "Markdown Preview for kintone",
    url: "https://h2o-space.shop/product/h2o-markdown-preview-for-kintone/",
  },
  {
    author: "サイボウズスタートアップス",
    name: "入力値チェックプラグイン 武井plus",
    url: "https://kintoneapp.com/blog/kintone_validation_check/",
  },
  {
    author: "JOYZO",
    name: "テーブルフィールドコピープラグイン",
    url: "https://www.joyzo.co.jp/service/plugin/tablefieldcopy/",
  },
  {
    author: "JOYZO",
    name: "カードビュープラグイン",
    url: "https://www.joyzo.co.jp/service/plugin/cardview/",
  },
  {
    author: "JOYZO",
    name: "自動採番プラグイン",
    url: "https://www.joyzo.co.jp/plugin/autonum",
  },
  {
    author: "JOYZO",
    name: "一覧個別指定プラグイン",
    url: "https://www.joyzo.co.jp/service/plugin/defaultview/",
  },
  {
    author: "JOYZO",
    name: "レコード一括更新プラグイン",
    url: "https://www.joyzo.co.jp/plugin/bulkupdate/",
  },
  {
    author: "JOYZO",
    name: "再利用フィールド指定プラグイン",
    url: "https://www.joyzo.co.jp/plugin/reusefields/",
  },
  {
    author: "JOYZO",
    name: "ドロップダウン絞り込みプラグイン",
    url: "https://www.joyzo.co.jp/plugin/originalpulldown/",
  },
  {
    author: "JOYZO",
    name: "フルスクリーンプラグイン",
    url: "https://www.joyzo.co.jp/plugin/fullscreen/",
  },
  {
    author: "JOYZO",
    name: "テーブル編集ビュープラグイン",
    url: "https://www.joyzo.co.jp/plugin/tableedit",
  },
  {
    author: "JOYZO",
    name: "条件付き入力制御プラグイン",
    url: "https://www.joyzo.co.jp/plugin/conditionalvalidation",
  },
  {
    author: "JOYZO",
    name: "予実管理プラグイン",
    url: "https://www.joyzo.co.jp/plugin/budget_performance",
  },
  {
    author: "JOYZO",
    name: "ルックアップコピー元登録",
    url: "https://www.joyzo.co.jp/plugin/lookupmaster",
  },
  {
    author: "JOYZO",
    name: "前年対比プラグイン",
    url: "https://www.joyzo.co.jp/service/plugin/yoy_comparison/",
  },
  {
    author: "JOYZO",
    name: "手書き2プラグイン",
    url: "https://www.joyzo.co.jp/plugin/handwriting/",
  },
  {
    author: "JOYZO",
    name: "krewData手動実行プラグイン",
    url: "https://www.joyzo.co.jp/service/plugin_free/krewdatakicker/",
  },
  {
    author: "JOYZO",
    name: "フィールド情報取得プラグイン",
    url: "https://www.joyzo.co.jp/plugin/forminfo/",
  },
  {
    author: "JOYZO",
    name: "Backlog チケット連携プラグイン",
    url: "https://www.joyzo.co.jp/plugin/backlog/",
  },
  {
    author: "JOYZO",
    name: "PDFプレビュープラグイン",
    url: "https://www.joyzo.co.jp/plugin_free/pdfpreview",
  },
  { author: "JOYZO", name: "組織別初期一覧設定プラグイン", url: "" },
  {
    author: "クラウドコンシェル",
    name: "操作ボタン説明ラベル",
    url: "http://cc.timeconcier.jp/plugin/",
  },
  {
    author: "クラウドコンシェル",
    name: "住所フィールドマップリンク",
    url: "http://cc.timeconcier.jp/plugin/",
  },
  {
    author: "クラウドコンシェル",
    name: "フィールド値合計行表示",
    url: "http://cc.timeconcier.jp/plugin/",
  },
  {
    author: "",
    name: "kintoneで匿名掲示板プラグイン作ってみた",
    url: "http://qiita.com/kiku38/items/48c145b605aa37bc933e",
  },
  {
    author: "有限会社マミー",
    name: "フィールドコード表示",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA/%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B3%E3%83%BC%E3%83%89%E8%A1%A8%E7%A4%BA/",
  },
  {
    author: "有限会社マミー",
    name: "１文字・部分一致検索プラグイン",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/%EF%BC%91%E6%96%87%E5%AD%97%E3%83%BB%E9%83%A8%E5%88%86%E4%B8%80%E8%87%B4%E6%A4%9C%E7%B4%A2%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/",
  },
  {
    author: "有限会社マミー",
    name: "Twilioプラグイン",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/twilio%E9%80%A3%E6%90%BA%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/",
  },
  {
    author: "有限会社マミー",
    name: "グループ表示切り替えプラグイン",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E8%A1%A8%E7%A4%BA%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/",
  },
  {
    author: "有限会社マミー",
    name: "フィールド自動コピープラグイン",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/%E8%87%AA%E5%8B%95%E8%A8%88%E7%AE%97%E4%B8%8D%E5%8F%AF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E8%87%AA%E5%8B%95%E3%82%B3%E3%83%94%E3%83%BC%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/",
  },
  {
    author: "有限会社マミー",
    name: "表示内容記録プラグイン",
    url: "http://mammycloud.com/%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/kintone%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/%E8%A1%A8%E7%A4%BA%E5%86%85%E5%AE%B9%E8%A8%98%E9%8C%B2%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/",
  },
  {
    author: "アールスリーインスティテュート",
    name: "高機能ルックアッププラグイン",
    url: "https://blog.r3it.com/lookup-plugin-704c276990c7",
  },
  {
    author: "アールスリーインスティテュート",
    name: "承認ステップ図示プラグイン",
    url: "https://blog.r3it.com/process-image-plugin-ee73155178a6",
  },
  {
    author: "アールスリーインスティテュート",
    name: "テーブルデータ読み込みプラグイン",
    url: "https://blog.r3it.com/csv-table-plugin-1bf26443c184",
  },
  {
    author: "アールスリーインスティテュート",
    name: "Excel帳票プラグイン",
    url: "https://docs.gusuku.io/plugin/xlsxp/",
  },
  {
    author: "gusuku",
    name: "添付ファイル保存プラグイン",
    url: "https://docs.gusuku.io/plugin/fileattach/",
  },
  {
    author: "gusuku",
    name: "孫の手プラグイン",
    url: "https://www.slideshare.net/cybozucommunity/9-20170419-kintonehivefukuokakonparumeiryo1",
  },
  {
    author: "ツバイソ",
    name: "「ツバイソERP」プラグイン",
    url: "https://tsubaiso.jp/news/2016/03/20160328.html",
  },
  {
    author: "Smart",
    name: "at estimat プラグイン",
    url: "http://smartat.jp/estimate/kintone/",
  },
  {
    author: "キントレンジャー365",
    name: "メモプラグイン",
    url: "http://kintoranger.jp/blog/2016/04/12602/",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "集計プラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/05.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "既読チェックプラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/07.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "ファイル管理プラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/08.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "一覧拡張プラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/08.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "Smart at robo for Pepper",
    url: "https://kintone-apps.cybozu.co.jp/m_sol-001.html",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "検索拡張プラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/01.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "ルックアップ自動取得プラグイン",
    url: "https://kintone-sol.cybozu.co.jp/apps/m_sol-002.html",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "アクセスログ出力プラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/03.php",
  },
  {
    author: "M-SOLUTIONS株式会社",
    name: "表示切り替えプラグイン",
    url: "https://m-sol.co.jp/service/kintone/contents/06/04.php",
  },
  {
    author: "株式会社ソウルウェア",
    name: "RepotoneU Pro",
    url: "https://www.repotone.com/u/pro/",
  },
  {
    author: "株式会社ソウルウェア",
    name: "RepotoneU PDF",
    url: "http://www.repotone.com/u/pdf/",
  },
  {
    author: "株式会社ソウルウェア",
    name: "RepotoneU Excel",
    url: "http://www.repotone.com/u/excel/",
  },
  {
    author: "株式会社",
    name: "神戸デジタル・ラボ プレースホルダ設定プラグイン",
    url: "https://blog.ismg.kdl.co.jp/kintone/kintoneplaceholderplugin",
  },
  {
    author: "株式会社",
    name: "神戸デジタル・ラボ 情報検索プラグイン",
    url: "http://www.kdl.co.jp/news/2016/06/kintone_plugin.html",
  },
  {
    author: "メサイア・ワークス",
    name: "動画再生",
    url: "http://www.messiahworks.com/archives/8391",
  },
  {
    author: "rex0220",
    name: "タブ表示プラグイン",
    url: "http://qiita.com/rex0220/items/1af3527d60fbaecbfceb",
  },
  {
    author: "rex0220",
    name: "テーブルヘッダ固定表示",
    url: "http://qiita.com/rex0220/items/70e0b498cd26b2593363",
  },
  {
    author: "rex0220",
    name: "テーマ・プラグイン",
    url: "http://qiita.com/rex0220/items/c55b7362a77ed97f31fa",
  },
  {
    author: "rex0220",
    name: "フィールドコード設定プラグイン",
    url: "http://qiita.com/rex0220/items/e2a475c8097740f94254",
  },
  {
    author: "rex0220",
    name: "テーブルレイアウト設定プラグイン",
    url: "http://qiita.com/rex0220/items/740ffc14416432e82e47",
  },
  {
    author: "rex0220",
    name: "ルックアップ先更新プラグイン",
    url: "http://qiita.com/rex0220/items/573c462117ad4104c2cd",
  },
  {
    author: "rex0220",
    name: "ルックアップ自動取得プラグイン",
    url: "http://qiita.com/rex0220/items/7a1984b75644b00cb508",
  },
  {
    author: "rex0220",
    name: "ルックアップ選択条件プラグイン",
    url: "http://qiita.com/rex0220/items/6d40f02069e2d386f336",
  },
  {
    author: "rex0220",
    name: "ルックアップコピー項目編集プラグイン",
    url: "http://qiita.com/rex0220/items/7fd6279c04346952221f",
  },
  {
    author: "rex0220",
    name: "レイティング表示プラグイン",
    url: "http://qiita.com/rex0220/items/2b1ec8f8966fc6ffbf0b",
  },
  {
    author: "rex0220",
    name: "絵描きプラグイン",
    url: "http://qiita.com/rex0220/items/4fc5d37e0dc23dab3855",
  },
  {
    author: "rex0220",
    name: "数字チェック・プラグイン",
    url: "http://qiita.com/rex0220/items/7dc8322d86630b57cba8",
  },
  {
    author: "rex0220",
    name: "フィールドオプションリスト設定プラグイン",
    url: "http://qiita.com/rex0220/items/ebe7cffdc6e93455f38a",
  },
  {
    author: "rex0220",
    name: "グラフ印刷プラグイン",
    url: "http://qiita.com/rex0220/items/eb8cb9f2e01b45f71555",
  },
  {
    author: "rex0220",
    name: "項目非表示プラグイン",
    url: "http://qiita.com/rex0220/items/67d560779c9d879f67f6",
  },
  {
    author: "rex0220",
    name: "一覧メニュープラグイン",
    url: "http://qiita.com/rex0220/items/6c4fce3237446fdf19a6",
  },
  {
    author: "rex0220",
    name: "一覧権限設定プラグイン",
    url: "http://qiita.com/rex0220/items/37c4faa29aa013e76eda",
  },
  {
    author: "rex0220",
    name: "添付ファイル再利用プラグイン",
    url: "http://qiita.com/rex0220/items/f59a5f6b17776fb9af74",
  },
  {
    author: "rex0220",
    name: "テーブル行移動プラグイン",
    url: "http://qiita.com/rex0220/items/1bfadd2fafb11a68ed6e",
  },
  {
    author: "rex0220",
    name: "レコードタイトル設定プラグイン",
    url: "http://qiita.com/rex0220/items/cfb1633a148014257481",
  },
  {
    author: "rex0220",
    name: "計算項目更新プラグイン",
    url: "http://qiita.com/rex0220/items/da651a041476784ca646",
  },
  {
    author: "rex0220",
    name: "通し番号プラグイン",
    url: "http://qiita.com/rex0220/items/7955330690679da3210e",
  },
  {
    author: "rex0220",
    name: "ルックアップ一括取得プラグイン",
    url: "http://qiita.com/rex0220/items/c285574a3d97e1db36b4",
  },
  {
    author: "rex0220",
    name: "複数選択項目リセットプラグイン",
    url: "http://qiita.com/rex0220/items/e305a48672f31bd2eb90",
  },
  {
    author: "rex0220",
    name: "生年月日プラグイン",
    url: "http://qiita.com/rex0220/items/ff13df3e55e34ae81d37",
  },
  {
    author: "rex0220",
    name: "年月入力プラグイン",
    url: "http://qiita.com/rex0220/items/c17512a3fbf14fd51ab9",
  },
  {
    author: "rex0220",
    name: "第３希望までプラグイン",
    url: "http://qiita.com/rex0220/items/15136353ded8516fff2b",
  },
  {
    author: "rex0220",
    name: "ちょっと便利なプラグイン",
    url: "http://qiita.com/rex0220/items/45883f15ccd34a68b8af",
  },
  {
    author: "rex0220",
    name: "KANAかなプラグイン",
    url: "http://qiita.com/rex0220/items/926caea097c2243663d8",
  },
  {
    author: "rex0220",
    name: "郵便の宛先プラグイン",
    url: "http://qiita.com/rex0220/items/32d038d2d3a6cbb3969a",
  },
  {
    author: "rex0220",
    name: "ルックアップコピー拡張プラグイン",
    url: "http://qiita.com/rex0220/items/defad244506d701cf821",
  },
  {
    author: "rex0220",
    name: "テーマプラス・プラグイン",
    url: "http://qiita.com/rex0220/items/eefd5f57af84f70eb12e",
  },
  {
    author: "rex0220",
    name: "一覧絞り込みプラグイン",
    url: "https://qiita.com/rex0220/items/21f122195049dde45af1",
  },
  {
    author: "rex0220",
    name: "項目絞り込みプラグイン",
    url: "http://qiita.com/rex0220/items/f9c3acc40ffa68c43a0e",
  },
  {
    author: "rex0220",
    name: "自動採番Ex プラグイン",
    url: "http://qiita.com/rex0220/items/63492ee682d8319907d3",
  },
  {
    author: "rex0220",
    name: "文字計数プラグイン",
    url: "http://qiita.com/rex0220/items/68b7d66928332fa50d77",
  },
  {
    author: "rex0220",
    name: "テキスト翻訳プラグイン",
    url: "http://qiita.com/rex0220/items/cf808b8c33cf1161eaba",
  },
  {
    author: "rex0220",
    name: "チェックボックスレイアウトプラグイン",
    url: "http://qiita.com/rex0220/items/0cc12bd8bce58d5a1f06",
  },
  {
    author: "rex0220",
    name: "計算式プラグイン",
    url: "http://qiita.com/rex0220/items/ae83c6d5ce50ff7a9a73",
  },
  {
    author: "rex0220",
    name: "テーブル行複写プラグイン",
    url: "http://qiita.com/rex0220/items/061f610d6bc9b88cf749",
  },
  {
    author: "rex0220",
    name: "項目検証プラグイン",
    url: "http://qiita.com/rex0220/items/be20fd879f5e1bc9e035",
  },
  {
    author: "rex0220",
    name: "関連テーブルプラグイン",
    url: "https://qiita.com/rex0220/items/973da400b31137f22d98",
  },
  {
    author: "rex0220",
    name: "文字検索プラグイン",
    url: "https://qiita.com/rex0220/items/dbd05791e6760dbbcad8",
  },
  {
    author: "rex0220",
    name: "グリッド表示プラグイン",
    url: "https://qiita.com/rex0220/items/009dde4cfad3dc90828c",
  },
  {
    author: "rex0220",
    name: "更新確認プラグイン",
    url: "https://qiita.com/rex0220/items/e031167b4edb1fce36c5",
  },
  {
    author: "rex0220",
    name: "フォームレイアウトプラグイン",
    url: "https://qiita.com/rex0220/items/6b9918618468e0b6b923",
  },
  {
    author: "rex0220",
    name: "ツールチッププラグイン",
    url: "https://qiita.com/rex0220/items/8cfdc816d9c300f79e34",
  },
  {
    author: "rex0220",
    name: "ルックアップコピー項目編集プラスプラグイン",
    url: "https://qiita.com/rex0220/items/422994971a90e0bfc1d3",
  },
  {
    author: "rex0220",
    name: "項目入力不可プラグイン",
    url: "https://qiita.com/rex0220/items/c0e7530df3f74e197df2",
  },
  {
    author: "rex0220",
    name: "関連レコード集計プラグイン",
    url: "https://qiita.com/rex0220/items/8cbe764670b0e6431a42",
  },
  {
    author: "rex0220",
    name: "ユーザー選択プラグイン",
    url: "https://qiita.com/rex0220/items/379f2a71231fde0d5d01",
  },
  {
    author: "rex0220",
    name: "アプリ集計プラグイン",
    url: "https://qiita.com/rex0220/items/9a6996d46e199c83289d",
  },
  {
    author: "rex0220",
    name: "自動補完プラグイン",
    url: "https://qiita.com/rex0220/items/d864a49f7da8c80cf400",
  },
  {
    author: "rex0220",
    name: "データ生成プラグイン",
    url: "https://qiita.com/rex0220/items/8e760adbfd69b9416b2d",
  },
  {
    author: "rex0220",
    name: "算式採番プラグイン",
    url: "https://qiita.com/rex0220/items/2e40a57d2d08023affde",
  },
  {
    author: "rex0220",
    name: "アプリ管理プラグイン",
    url: "https://qiita.com/rex0220/items/9304ec2454380457c935",
  },
  {
    author: "rex0220",
    name: "データ反映プラグイン",
    url: "https://qiita.com/rex0220/items/aa4587ae9684efde157e",
  },
  {
    author: "rex0220",
    name: "一括承認プラグイン",
    url: "https://qiita.com/rex0220/items/199294da3994dcd9e49b",
  },
  {
    author: "rex0220",
    name: "テーブルルックアッププラグイン",
    url: "https://qiita.com/rex0220/items/6a01b68adea34ab6aa35",
  },
  {
    author: "rex0220",
    name: "アクション表示制御プラグイン",
    url: "https://qiita.com/rex0220/items/75b741747689c79db4cc",
  },
];
