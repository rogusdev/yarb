#!/bin/fish
cd backend-axum && cargo fmt && cd -
cd backend-axum/examples/testing && cargo fmt && cd -
cd frontend-dioxus && cargo fmt && cd -
cd shared-backfront && cargo fmt && cd -
