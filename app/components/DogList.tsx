import { Link } from '@remix-run/react';
import { Accordion } from './Accordion';

export default function DogList() {
    const dogCategories = {
        "WorkingDogs": {
            "category_jp": "働く犬",
            "breeds": {
                "Akita": "秋田",
                "Boxer": "ボクサー",
                "Doberman": "ドーベルマン",
                "Rottweiler": "ロットワイラー",
                "GreatDane": "グレートデーン",
                "SiberianHusky": "シベリアンハスキー"
            }
        },
        "HerdingDogs": {
            "category_jp": "牧羊犬",
            "breeds": {
                "AustralianShepherd": "オーストラリアンシェパード",
                "BorderCollie": "ボーダーコリー",
                "Corgi": "コーギー",
                "GermanShepherd": "ジャーマンシェパード"
            }
        },
        "ToyDogs": {
            "category_jp": "トイ犬",
            "breeds": {
                "Chihuahua": "チワワ",
                "Pomeranian": "ポメラニアン",
                "Pug": "パグ",
                "ShihTzu": "シーズー"
            }
        },
        "SportingDogs": {
            "category_jp": "スポーティング犬",
            "breeds": {
                "GoldenRetriever": "ゴールデンレトリーバー",
                "LabradorRetriever": "ラブラドールレトリーバー",
                "CockerSpaniel": "コッカースパニエル",
                "Pointer": "ポインター"
            }
        },
        "HoundDogs": {
            "category_jp": "ハウンド犬",
            "breeds": {
                "Beagle": "ビーグル",
                "Dachshund": "ダックスフンド",
                "Greyhound": "グレイハウンド",
                "BassetHound": "バセットハウンド"
            }
        },
        "NonSportingDogs": {
            "category_jp": "ノンスポーティング犬",
            "breeds": {
                "Bulldog": "ブルドッグ",
                "Dalmatian": "ダルメシアン",
                "Poodle": "プードル",
                "ChowChow": "チャウチャウ"
            }
        },
        "TerrierDogs": {
            "category_jp": "テリア犬",
            "breeds": {
                "BullTerrier": "ブルテリア",
                "ScottishTerrier": "スコティッシュテリア",
                "WestHighlandWhiteTerrier": "ウェストハイランドホワイトテリア",
                "YorkshireTerrier": "ヨークシャーテリア"
            }
        }
    };

    return (
        <div>
            {Object.entries(dogCategories).map(([category, data]) => (
                <Accordion key={category} title={data.category_jp}>
                    <ul>
                        {Object.entries(data.breeds).map(([breedEn, breedJp]) => (
                            <li key={breedEn}><Link to={`/dog/${breedEn}`}>{breedJp}</Link></li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </div>
    );
}
