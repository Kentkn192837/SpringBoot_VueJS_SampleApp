FROM gradle:7.6-jdk17 AS builder
WORKDIR /app

# プロジェクトのソースコードをコピー
COPY . .

# Gradleを使用して依存関係をダウンロード
RUN gradle clean assemble --no-daemon

# 実行用のイメージを作成
FROM openjdk:17-jdk-slim
WORKDIR /app

# ソースコードをコンテナにコピー
COPY --from=builder /app /app

# ポートを公開
EXPOSE 8080

# ホットリロード用にソースコードをマウント
VOLUME /app/src

# アプリケーションを実行
ENTRYPOINT ["java", "-jar", "build/libs/SpringBoot_VueJS_SampleApp.jar"]
