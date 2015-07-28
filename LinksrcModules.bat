call jspm install --unlink dash-component=github:beintrepid/dash-component
call jspm install --unlink dash-transform=github:beintrepid/dash-transform
call jspm install --unlink dash-core=github:beintrepid/dash-core
call jspm install --unlink dash-github=github:beintrepid/dash-github
call jspm install --unlink dash-transform-vis=github:beintrepid/dash-transform-vis

call jspm uninstall dash-component
call jspm uninstall dash-transform
call jspm uninstall dash-core
call jspm uninstall dash-github
call jspm uninstall dash-transform-vis


call jspm install --link dash-component=github:beintrepid/dash-component -y
call jspm install --link dash-transform=github:beintrepid/dash-transform -y
call jspm install --link dash-core=github:beintrepid/dash-core -y
call jspm install --link dash-github=github:beintrepid/dash-github -y
call jspm install --link dash-transform-vis=github:beintrepid/dash-transform-vis -y